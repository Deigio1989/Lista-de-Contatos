import { useSelector } from 'react-redux'
import Contato from './Contato'
import { ContactMain } from './styles'
import { RootReducer } from '../../store'
import { Tipo } from '../../utils/enums/Contato'

export default function ListaDeContatos() {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, tipo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (tipo !== undefined) {
        if (tipo !== Tipo.TODOS) {
          contatosFiltrados = contatosFiltrados.filter(
            (item) => item.tipo === tipo
          )
        }
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }
  const contador = filtraContatos().length

  return (
    <>
      <ContactMain>
        <p>
          Você tem <b>{contador}</b> contato(s) no(s) filtro(s) selecionados:
          <i> &quot;{tipo}&quot;</i>{' '}
          <i>{termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''}</i>
        </p>
        <ul>
          {filtraContatos().map((c) => (
            <li key={c.nome}>
              <Contato
                nome={c.nome}
                email={c.email}
                tel={c.tel}
                tipo={c.tipo}
                id={c.id}
              />
            </li>
          ))}
        </ul>
      </ContactMain>
    </>
  )
}

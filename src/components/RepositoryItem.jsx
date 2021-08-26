export function RepositoryItem(props) {
    return (
        <li>
          <strong>{props.repository.name ?? 'Default'}</strong>
          <p>{props.repository.desctiption}</p>

          <a href={props.repository.link}>
            Acessar repositório
          </a>
        </li>
    ) 
}
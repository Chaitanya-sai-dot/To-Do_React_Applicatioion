import Button from './Button' 
const Header = ({ title,onAdd,showAdd }) => {
    return (
        <header className='header'>
            <h1>task tracker {title}</h1>
            <Button color={showAdd?'red':'green'} text={showAdd?'Close':'Add'} onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps={
    title:'Task'
}
export default Header

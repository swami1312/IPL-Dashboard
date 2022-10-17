// Write your code here
const TeamCard = props => {
  const {teamCardData} = props
  const {teamImageUrl, name} = teamCardData

  return (
    <li>
      <img src={teamImageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default TeamCard

import * as React from 'react'
import alumniList from './alumni.json'
import ItemCard from '../team/item-card/item-card'
import styles from './hire.scss'
import id from 'uuid/v4'

class Hire extends React.Component {
  state = {
    uniqueSkills: [],
    selectedSkills: [],
    selectedStatus: [],
    uniqueStatuses: [],
    alumniList
  }

  componentDidMount() {
    let skills = []
    let statuses = []
// Applying this to the original alumnilist
    alumniList.forEach(alumni => {
      skills = [...skills, ...alumni.skills]
      statuses = [...statuses, alumni.status]
    })

    this.setState({
      // get distinct unique items from an array
      uniqueSkills: [...new Set(skills)].sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      ),
      uniqueStatuses: [...new Set(statuses)].filter(
        skill => skill === 'looking for jobs'
      )
    })
  }

  doFiltering = () => {
    console.log(this.state)
    // by default: all alumni list

    let newAlumniList =
      this.state.selectedStatus[0] === 'looking for jobs'
        ? alumniList.filter(alumni => alumni.status === 'looking for jobs')
        : alumniList

    if (this.state.selectedSkills.length !== 0) {
      // if any filter by skills button is clicked, then filter by skills
      newAlumniList = newAlumniList.filter(alumni =>
        this.state.selectedSkills.every(s => alumni.skills.includes(s))
      )
    }
    if (this.state.selectedStatus.length !== 0) {
      newAlumniList = newAlumniList.filter(alumni =>
        this.state.selectedStatus.every(s => alumni.status === s)
      )
    } 
    if(this.state.selectedSkills.length === 0) {
      newAlumniList = newAlumniList.filter(alumni => {
        // Added condition to also filter profile which is not updated from last 6months once the skills are filtered
        const todayDate = new Date()
        const dateToArray = alumni.lastUpdateDate.split('-')
        const formatedDateString = new Date(
          `${dateToArray[2]}-${dateToArray[1]}-${dateToArray[0]}`
        )
        return (
          formatedDateString >
            new Date(todayDate.getTime() - 24 * 60 * 60 * 1000 * 182.5)
        )
      })
    }
    this.setState({ alumniList: newAlumniList })
  }

  filterSkillsHandler = skill => {
    this.setState(
      state => ({
        selectedSkills: state.selectedSkills.includes(skill)
          ? state.selectedSkills.filter(i => i !== skill)
          : [...state.selectedSkills, skill]
      }),
      () => this.doFiltering()
    )
  }

  filterStatusesHandler = status => {
    this.setState(
      state => ({
        selectedStatus: state.selectedStatus.includes(status)
          ? state.selectedStatus.filter(i => i !== status)
          : [...state.selectedStatus, status]
      }),
      () => this.doFiltering()
    )
  }

  render = () => {
    const {
      alumniList,
      uniqueSkills,
      selectedSkills,
      uniqueStatuses,
      selectedStatus
    } = this.state
    return (
      <>
        <style jsx>{styles}</style>
        <div className='filters'>
          {/*FILTER BY SKILLS ---------------- */}
          <p>
            <strong>Select competency</strong>
          </p>
          {uniqueSkills.map(skill => {
            return (
              <button
                key={id()}
                onClick={() => this.filterSkillsHandler(skill)}
                className={`${
                  selectedSkills.includes(skill) ? 'active' : 'outlined'
                } filter`}
                color='primary'
                aria-label='Filter specific skills'
              >
                {skill}
              </button>
            )
          })}

          {/*FILTER BY STATUS ---------------- */}
          <p>
            <strong>Select status</strong>
          </p>
          {uniqueStatuses.map(status => {
            return (
              <button
                key={id()}
                onClick={() => this.filterStatusesHandler(status)}
                className={`${selectedStatus.includes(status) &&
                  'active'} filter`}
                color='primary'
                aria-label='Filter specific status'
              >
                {status}
              </button>
            )
          })}
        </div>

        <div className='team-members'>
          {alumniList.length > 0 ? (
            alumniList
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(member => (
                <ItemCard
                  item={member}
                  key={member.id}
                  showHiredOverlay={true}
                />
              ))
          ) : (
            <div className='no-results'>
              <h3>No students found</h3>
              <p>Try change your search filter</p>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Hire

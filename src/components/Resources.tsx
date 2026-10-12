import { subjects } from '../content/resources'
import { CourseRow } from './CourseRow'
import { Section } from './Section'
import './Resources.css'

export function Resources() {
  return (
    <Section title="Resources" collapsible>
      <p className="resources__intro">notes, cheatsheets and solutions from my time at unsw.</p>
      {subjects.map((subject) => (
        <div key={subject.name} className="resources__subject">
          <h3 className="resources__subject-name">{subject.name}</h3>
          <ul className="resources__courses">
            {subject.courses.map((course) => (
              <CourseRow key={course.code} course={course} />
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}

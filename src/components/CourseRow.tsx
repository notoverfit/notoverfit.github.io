import { useId, useState } from 'react'
import type { Course, ResourceLink } from '../content/resources'
import { resourceUrl } from '../lib/resourceUrl'
import { Collapse } from './Collapse'
import { TextLink } from './TextLink'

interface CourseRowProps {
  course: Course
}

export function CourseRow({ course }: CourseRowProps) {
  const groups = course.groups ?? []
  const [openGroup, setOpenGroup] = useState<number | null>(null)
  const idPrefix = useId()
  const groupId = (index: number) => `${idPrefix}-group-${index}`

  const toggleGroup = (index: number) => setOpenGroup((current) => (current === index ? null : index))

  return (
    <li className="course">
      <div className="course__row">
        <span className="course__code">{course.code}</span>
        <span className="course__title">{course.title}</span>
        <span className="course__links link-list">
          {course.links.map((link) => (
            <TextLink key={link.path} href={resourceUrl(link.path)}>
              {link.label}
            </TextLink>
          ))}
          {groups.map((group, index) => (
            <button
              key={group.label}
              type="button"
              className="text-link"
              aria-expanded={openGroup === index}
              aria-controls={groupId(index)}
              onClick={() => toggleGroup(index)}
            >
              {group.label}
              <span className="course__count">
                {group.links.length} {openGroup === index ? '−' : '+'}
              </span>
            </button>
          ))}
        </span>
      </div>
      {groups.map((group, index) => (
        <Collapse key={group.label} id={groupId(index)} open={openGroup === index}>
          <GroupLinks links={group.links} />
        </Collapse>
      ))}
    </li>
  )
}

function GroupLinks({ links }: { links: ResourceLink[] }) {
  return (
    <div className="course__group link-list">
      {links.map((link) => (
        <TextLink key={link.path} href={resourceUrl(link.path)}>
          {link.label}
        </TextLink>
      ))}
    </div>
  )
}

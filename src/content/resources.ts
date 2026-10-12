/** Paths are relative to `public/resources`. */
export interface ResourceLink {
  label: string
  path: string
}

/** A collapsible set of related files, e.g. past papers. */
export interface ResourceGroup {
  label: string
  links: ResourceLink[]
}

export interface Course {
  code: string
  title: string
  links: ResourceLink[]
  groups?: ResourceGroup[]
}

export interface Subject {
  name: string
  courses: Course[]
}

/** Files live at `<course>/past-papers/<term>.pdf`, with terms like '2021-t3' shown as '21T3'. */
const pastPapers = (course: string, terms: string[]): ResourceGroup => ({
  label: 'past papers',
  links: terms.map((term) => ({
    label: term.replace(/^20(\d\d)-/, '$1').toUpperCase(),
    path: `${course}/past-papers/${term}.pdf`,
  })),
})

export const subjects: Subject[] = [
  {
    name: 'computer science',
    courses: [
      {
        code: 'COMP2511',
        title: 'Object-Oriented Design',
        links: [{ label: 'notes', path: 'comp2511/notes.md' }],
      },
      {
        code: 'COMP3121',
        title: 'Algorithm Design & Analysis',
        links: [
          { label: 'notes', path: 'comp3121/full-notes.pdf' },
          { label: 'extended', path: 'comp3121/extensive-notes.pdf' },
          { label: 'exam notes', path: 'comp3121/exam-notes.pdf' },
          { label: 'examples', path: 'comp3121/lecture-examples.pdf' },
        ],
      },
      {
        code: 'COMP3231',
        title: 'Operating Systems',
        links: [
          { label: 'notes', path: 'comp3231/notes/notes.md' },
          { label: 'exam notes', path: 'comp3231/exam-notes.pdf' },
        ],
      },
      {
        code: 'COMP3311',
        title: 'Database Systems',
        links: [
          { label: 'notes', path: 'comp3311/full-notes.pdf' },
          { label: 'cheatsheet', path: 'comp3311/cheat-sheet.pdf' },
          { label: 'anki', path: 'comp3311/theory-deck.apkg' },
        ],
      },
      {
        code: 'COMP3331',
        title: 'Computer Networks',
        links: [
          { label: 'notes', path: 'comp3331/notes.pdf' },
          { label: 'anki', path: 'comp3331/theory-deck.apkg' },
        ],
      },
      {
        code: 'COMP6080',
        title: 'Web Front-End Programming',
        links: [{ label: 'notes', path: 'comp6080/notes/notes.md' }],
      },
      {
        code: 'COMP9417',
        title: 'Machine Learning & Data Mining',
        links: [
          { label: 'notes', path: 'comp9417/notes/notes.md' },
          { label: 'cheatsheet', path: 'comp9417/exam-cheatsheet.pdf' },
        ],
      },
    ],
  },
  {
    name: 'mathematics & statistics',
    courses: [
      {
        code: 'MATH1081',
        title: 'Discrete Mathematics',
        links: [
          { label: 'lab test 1', path: 'math1081/lab-test-1.pdf' },
          { label: 'lab test 2', path: 'math1081/lab-test-2.pdf' },
        ],
        groups: [
          pastPapers('math1081', ['2020-t1', '2020-t2', '2020-t3', '2021-t1', '2021-t2', '2021-t3', '2022-t1', '2022-t2']),
        ],
      },
      {
        code: 'MATH1231',
        title: 'Mathematics 1B',
        links: [],
        groups: [
          pastPapers('math1231', ['2020-t1', '2020-t2', '2020-t3', '2021-t1', '2021-t2', '2021-t3', '2022-t1', '2022-t2-t3', '2023-t1']),
        ],
      },
      {
        code: 'MATH2501',
        title: 'Linear Algebra',
        links: [{ label: 'notes', path: 'math2501/notes.pdf' }],
      },
      {
        code: 'MATH2801',
        title: 'Theory of Statistics',
        links: [],
        groups: [
          {
            label: 'notes',
            links: [
              { label: 'descriptive stats', path: 'math2801/descriptive-statistics.pdf' },
              { label: 'random variables', path: 'math2801/random-variables.pdf' },
              { label: 'univariate', path: 'math2801/univariate-distributions.pdf' },
              { label: 'bivariate', path: 'math2801/bivariate-distributions.pdf' },
              { label: 'survey design', path: 'math2801/survey-design.pdf' },
            ],
          },
        ],
      },
      {
        code: 'MATH2831',
        title: 'Linear Models',
        links: [{ label: 'notes', path: 'math2831/notes.html' }],
        groups: [
          {
            label: 'final solutions',
            links: ['2014', '2019', '2020', '2021', '2023'].map((year) => ({
              label: year,
              path: `math2831/finals/${year}.pdf`,
            })),
          },
        ],
      },
    ],
  },
  {
    name: 'finance & commerce',
    courses: [
      {
        code: 'FINS2624',
        title: 'Portfolio Management',
        links: [
          { label: 'notes', path: 'fins2624/notes.pdf' },
          { label: 'final notes', path: 'fins2624/final-notes.pdf' },
        ],
      },
      {
        code: 'COMM1100',
        title: 'Business Decision Making',
        links: [{ label: 'notes', path: 'comm1100/notes.html' }],
      },
    ],
  },
]

import type { Icon } from './types'

export const IconSupersetOf: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='superset-of'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6 4.25a.75.75 0 1 0 0 1.5v-1.5Zm7.176.75v-.75V5Zm2.868 10.04-.396-.638.396.637Zm-.195.12-.396-.636.396.637ZM12.91 16v.75V16ZM6 15.25a.75.75 0 0 0 0 1.5v-1.5Zm9.675-9.64.345-.667-.345.666Zm2.63 14.235a.75.75 0 0 0 0-1.5v1.5Zm-12.61-1.5a.75.75 0 0 0 0 1.5v-1.5ZM6 5v.75h7.176v-1.5H6V5Zm10.044 10.04-.396-.638-.195.122.396.637.396.637.195-.122-.396-.637Zm-3.133.96v-.75H6v1.5h6.912V16Zm2.938-.84-.396-.636a4.811 4.811 0 0 1-2.541.726v1.5a6.31 6.31 0 0 0 3.333-.952l-.396-.637ZM13.176 5v.75c.75 0 1.489.18 2.154.525l.345-.666.345-.666a6.18 6.18 0 0 0-2.844-.693V5Zm2.5.61-.346.665c3.22 1.67 3.399 6.211.318 8.127l.396.637.396.637c4.068-2.53 3.834-8.527-.42-10.733l-.345.666Zm2.628 13.485v-.75H5.696v1.5h12.608v-.75Z'
      />
    </svg>
  )
}

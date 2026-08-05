import type { Icon } from './types'

export const IconNotSupersetProperOf: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='not-superset-proper-of'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M4.027 2.966a.75.75 0 0 0-1.061 1.06l.53-.53.53-.53Zm15.946 18.068a.75.75 0 0 0 1.06-1.06l-.53.53-.53.53ZM5.613 4.862a.75.75 0 1 0 0 1.5v-1.5Zm7.606.75v-.75.75Zm3.331 11.66-.396-.637.396.637Zm-.227.141.396.637-.396-.637Zm-3.411.974v-.75.75Zm-8.027-.75a.75.75 0 0 0 0 1.5v-1.5ZM16.12 6.32l-.345.666.345-.666ZM3.496 3.496l-.53.53 17.007 17.008.53-.53.53-.53L4.028 2.965l-.53.53Zm2.116 2.116v.75h7.607v-1.5H5.612v.75Zm10.938 11.66-.396-.637-.227.141.396.637.396.637.227-.142-.396-.636Zm-3.638 1.116v-.75H4.885v1.5h8.027v-.75Zm3.411-.975-.396-.637a5.708 5.708 0 0 1-3.015.861v1.5a7.208 7.208 0 0 0 3.807-1.087l-.396-.637Zm-3.104-11.8v.75c.89 0 1.767.213 2.557.623l.345-.666.346-.666a7.056 7.056 0 0 0-3.248-.792v.75Zm2.902.707-.345.666c3.824 1.982 4.035 7.374.378 9.649l.396.637.396.637c4.645-2.89 4.377-9.737-.48-12.255l-.345.666Z'
      />
    </svg>
  )
}

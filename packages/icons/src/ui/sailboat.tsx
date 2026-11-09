import type { Icon } from './types'

export const IconSailboat: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-sailboat'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.97 17.98c-.47-1.23-.7-1.85-.41-2.28.3-.44.96-.44 2.28-.44h14.24c1.32 0 1.99 0 2.28.44.3.43.06 1.05-.41 2.28l-1.18 3.06c-.24.61-.36.92-.62 1.1-.25.17-.59.17-1.25.17H6.02c-.67 0-1 0-1.26-.17-.25-.18-.37-.49-.61-1.1z'
        fill='currentColor'
      />
      <path opacity='.2' d='M9.12 10 2.7 9.44l6.14-7.17z' fill='currentColor' />
      <path d='M9.14 14.92v-13' stroke='currentColor' />
      <path
        d='m4.43 6.7 3.62-3.95c.53-.58.8-.87 1.15-.92.36-.05.7.16 1.36.57l6.46 3.95c2.46 1.5 3.68 2.24 3.48 2.97s-1.64.73-4.52.73H5.9c-1.95 0-2.93 0-3.19-.6s.4-1.31 1.72-2.75'
        stroke='currentColor'
      />
      <path
        d='M9.16 22.21h5.7c1.59 0 2.38 0 3.07-.26a4 4 0 0 0 1.32-.83c.54-.51.88-1.23 1.57-2.66.6-1.24.89-1.86.78-2.35a1.5 1.5 0 0 0-.55-.88c-.4-.31-1.1-.31-2.47-.31H5.44c-1.42 0-2.13 0-2.54.32a1.5 1.5 0 0 0-.53.86c-.11.51.2 1.15.83 2.42.71 1.43 1.06 2.14 1.61 2.64a4 4 0 0 0 1.27.79c.7.26 1.49.26 3.08.26'
        stroke='currentColor'
      />
    </svg>
  )
}

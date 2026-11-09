import type { Icon } from './types'

export const IconStarFilled: Icon = ({
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
      data-slot='icon-ui-star-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M9.33 6.26C10.5 3.97 11.08 2.83 12 2.83s1.5 1.14 2.67 3.43l.23.45c.34.67.51 1 .8 1.22.3.2.67.27 1.4.38l.5.08c2.55.4 3.82.61 4.1 1.48.28.88-.62 1.79-2.44 3.6l-.36.37c-.53.53-.8.8-.9 1.13-.12.34-.06.71.06 1.45l.08.5c.4 2.55.6 3.82-.14 4.36-.75.54-1.9-.05-4.19-1.21l-.45-.23c-.67-.34-1-.51-1.36-.51s-.7.17-1.36.5l-.45.24c-2.3 1.16-3.44 1.75-4.19 1.2-.74-.53-.54-1.8-.14-4.34l.08-.5c.12-.75.18-1.12.07-1.46-.12-.34-.38-.6-.9-1.13l-.37-.36c-1.82-1.82-2.72-2.73-2.44-3.6s1.55-1.08 4.1-1.5l.5-.08c.73-.11 1.1-.17 1.4-.38.29-.22.46-.55.8-1.22z'
        fill='currentColor'
      />
      <path
        d='m6.73 8.08-.88.14c-2.54.4-3.8.6-4.09 1.48-.28.87.62 1.78 2.44 3.6l.63.63c.53.53.79.79.9 1.13s.05.71-.06 1.45l-.14.88c-.4 2.54-.6 3.8.14 4.35s1.9-.05 4.18-1.21l.79-.4c.67-.34 1-.51 1.36-.51s.7.17 1.36.5l.79.4c2.29 1.17 3.44 1.76 4.18 1.22s.54-1.81.14-4.35l-.14-.88c-.11-.74-.17-1.1-.06-1.45s.37-.6.9-1.13l.63-.63c1.81-1.82 2.72-2.73 2.44-3.6s-1.55-1.08-4.1-1.48l-.87-.14c-.73-.12-1.1-.18-1.4-.39-.29-.2-.46-.54-.8-1.2l-.4-.8C13.5 3.4 12.92 2.26 12 2.26S10.5 3.4 9.33 5.69l-.4.8c-.34.66-.51 1-.8 1.2-.3.21-.67.27-1.4.39'
        stroke='currentColor'
      />
    </svg>
  )
}

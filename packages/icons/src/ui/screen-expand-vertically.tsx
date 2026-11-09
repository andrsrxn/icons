import type { Icon } from './types'

export const IconScreenExpandVertically: Icon = ({
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
      data-slot='icon-ui-screen-expand-vertically'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.88 15.27c0 3.3 0 4.95 1.03 5.97 1.02 1.03 2.67 1.03 5.97 1.03h.24c3.3 0 4.95 0 5.97-1.03 1.03-1.02 1.03-2.67 1.03-5.97V8.73c0-3.3 0-4.95-1.03-5.97-1.02-1.03-2.67-1.03-5.97-1.03h-.24c-3.3 0-4.95 0-5.97 1.03-1.03 1.02-1.03 2.67-1.03 5.97z'
        fill='currentColor'
      />
      <path
        d='M7.98 1.73a3.1 3.1 0 0 0-3.1 3.1v14.34a3.1 3.1 0 0 0 3.1 3.1'
        stroke='currentColor'
      />
      <path
        d='M16.02 1.73h.17a3 3 0 0 1 2.93 2.93v14.68a3 3 0 0 1-2.93 2.93h-.17'
        stroke='currentColor'
      />
      <path d='M12 19.88v-5.4' stroke='currentColor' />
      <path d='M12 4.12v5.43' stroke='currentColor' />
      <path
        d='m9.3 18.32.58.58c1 1 1.5 1.5 2.12 1.5s1.12-.5 2.12-1.5l.59-.58'
        stroke='currentColor'
      />
      <path
        d='m9.3 5.68.58-.59c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l.59.59'
        stroke='currentColor'
      />
    </svg>
  )
}

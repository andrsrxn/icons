import type { Icon } from './types'

export const IconStoryOne: Icon = ({
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
      data-slot='icon-ui-story-one'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12.07' cy='11.98' rx='10.25' ry='10.29' fill='currentColor' />
      <path d='M12 22.25a10.25 10.25 0 0 1 0-20.5' stroke='currentColor' />
      <path d='M21.45 7.88c-1-2.28-2.8-4.13-5.06-5.18' stroke='currentColor' />
      <path d='M17 20.99q1.05-.59 1.92-1.37' stroke='currentColor' />
      <path d='M21.17 16.72A10 10 0 0 0 22.32 12' stroke='currentColor' />
      <path
        d='m9.44 8.78 1.75-1.1c.67-.44 1.01-.65 1.27-.51s.26.54.26 1.35v8.74'
        stroke='currentColor'
      />
    </svg>
  )
}

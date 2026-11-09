import type { Icon } from './types'

export const IconNotesSquiggle: Icon = ({
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
      data-slot='icon-ui-notes-squiggle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.9 21.46c3.78 0 5.66 0 6.83-1.17 1.18-1.18 1.18-3.06 1.18-6.83v-1.81c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17h-1.82c-3.77 0-5.65 0-6.82 1.17-1.18 1.17-1.18 3.06-1.18 6.83v1.8c0 3.78 0 5.66 1.18 6.84 1.17 1.17 3.05 1.17 6.82 1.17z'
        fill='currentColor'
      />
      <path
        d='M3.1 13.46v-1.81c0-3.77 0-5.66 1.17-6.83s3.05-1.17 6.82-1.17h1.82c3.77 0 5.65 0 6.82 1.17 1.18 1.17 1.18 3.06 1.18 6.83v1.8c0 3.78 0 5.66-1.18 6.84-1.17 1.17-3.05 1.17-6.82 1.17h-1.82c-3.77 0-5.65 0-6.82-1.17-1.18-1.18-1.18-3.06-1.18-6.83'
        stroke='currentColor'
      />
      <path d='M12 5.3V2' stroke='currentColor' />
      <path d='M7.6 5.3V2' stroke='currentColor' />
      <path d='M16.4 5.3V2' stroke='currentColor' />
      <path
        d='M14.54 15.73c1.57-1.46 2.58-3.07 2.58-4.03 0-1.36-1.1-1.97-2.28-1.76-2.26.4-3.26 2.94-6.4 2.54-1.57-.2-2.1-1.78-.9-2.75.76-.62 1.81-.55 2.74-.92m4.26 6.92c-.83.77-1.83 1.5-2.91 2.08-1.98 1.04-3.73-.19-3.37-1.5.31-1.14 1.74-1.5 3.37-1.5.77 0 2.2.32 2.91.92m0 0c.84.71 1.34 1.3 1.34 1.3'
        stroke='currentColor'
      />
    </svg>
  )
}

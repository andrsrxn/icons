import type { Icon } from './types'

export const IconTrashOff: Icon = ({
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
      data-slot='icon-ui-trash-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.54 22c1.58 0 2.37 0 2.93-.45.55-.46.7-1.24 1-2.8l1.61-8.5c.42-2.19.63-3.29.03-4.01-.6-.73-1.72-.73-3.96-.73H9.2c-2.14 0-3.22 0-3.81.7-.6.68-.45 1.74-.15 3.87l1.21 8.5c.23 1.63.35 2.45.91 2.94s1.4.49 3.05.49z'
        fill='currentColor'
      />
      <path
        d='m4.6 6.13 1.7 11.16c.35 2.27.52 3.4 1.28 4.11l.2.18c.82.64 1.97.64 4.26.64h.6c1.74 0 2.6 0 3.28-.38a3 3 0 0 0 .94-.8c.47-.62.6-1.48.85-3.2'
        stroke='currentColor'
      />
      <path d='m18.27 14.17 1.2-8.04' stroke='currentColor' />
      <path d='M3.53 5.7h2.14' stroke='currentColor' />
      <path d='M10.06 5.7h10.4' stroke='currentColor' />
      <path
        d='m17 5.51-.27-.63c-.53-1.23-.8-1.85-1.25-2.28a3 3 0 0 0-.86-.57c-.57-.25-1.24-.25-2.59-.25h-.9c-.45 0-.68 0-.89.03A3 3 0 0 0 8.12 3.2c-.11.18-.2.39-.4.8'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path d='M10.06 15.72v-5.3' stroke='currentColor' />
      <path d='M13.94 15.72v-1.7' stroke='currentColor' />
      <path d='M13.94 10.8v-.37' stroke='currentColor' />
    </svg>
  )
}

import type { Icon } from './types'

export const Icon3d: Icon = ({
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
      data-slot='icon-ui-3d'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path
        d='M13.05 16.06V7.94c0-.4 0-.6.14-.75s.33-.16.7-.17c1.84-.07 6.03.29 6.03 4.98s-4.19 5.05-6.02 4.98c-.38-.01-.57-.02-.71-.17-.14-.14-.14-.35-.14-.75'
        stroke='currentColor'
      />
      <path
        d='M4.54 15.72c1.12 1.83 5.2 1.96 5.2-1.51 0-1.75-1.35-2.26-2.8-2.29 1.28-.03 2.49-.65 2.49-2.3 0-3.26-3.84-3.14-4.9-1.41'
        stroke='currentColor'
      />
    </svg>
  )
}

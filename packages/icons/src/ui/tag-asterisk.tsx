import type { Icon } from './types'

export const IconTagAsterisk: Icon = ({
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
      data-slot='icon-ui-tag-asterisk'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M17.2 6.83a.95.95 0 1 1-1.33 1.34.95.95 0 0 1 1.34-1.34'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='m7.18 16.85 4.33-4.33' stroke='currentColor' />
      <path d='m12.3 15.49-5.9-1.58' stroke='currentColor' />
      <path d='m10.13 17.65-1.58-5.91' stroke='currentColor' />
      <path
        opacity='.2'
        d='M4.86 19.2c-1.48-1.48-2.22-2.22-2.53-3.07a4 4 0 0 1 0-2.7c.3-.84 1.05-1.58 2.53-3.06l6.93-6.94c.87-.86 1.3-1.3 1.85-1.52.55-.23 1.17-.23 2.4-.23h.34c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v.35c0 1.22 0 1.83-.23 2.39-.23.55-.66.98-1.53 1.85L13.7 19.2c-1.48 1.48-2.22 2.22-3.07 2.52a4 4 0 0 1-2.7 0c-.84-.3-1.58-1.04-3.06-2.52'
        fill='currentColor'
      />
      <path
        d='M16.38 1.68h-.35c-1.22 0-1.84 0-2.39.23-.55.22-.98.66-1.85 1.52l-6.93 6.94c-1.48 1.48-2.22 2.22-2.53 3.06a4 4 0 0 0 0 2.7c.3.85 1.05 1.59 2.53 3.07s2.22 2.22 3.06 2.52a4 4 0 0 0 2.7 0c.85-.3 1.59-1.04 3.07-2.52l6.93-6.93c.87-.87 1.3-1.3 1.53-1.85.23-.56.23-1.17.23-2.4v-.34c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88'
        stroke='currentColor'
      />
    </svg>
  )
}

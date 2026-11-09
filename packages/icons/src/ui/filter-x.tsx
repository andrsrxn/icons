import type { Icon } from './types'

export const IconFilterX: Icon = ({
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
      data-slot='icon-ui-filter-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M6.63 11.2 2.88 7.47l-.17-.18a3 3 0 0 1-.8-1.91v-.25l.01-.56a3 3 0 0 1 2.75-2.74l.56-.01H19.4a3 3 0 0 1 2.74 2.75l.01.56v.25a3 3 0 0 1-.79 1.91l-.18.18-3.74 3.75c-.87.86-1.3 1.3-1.53 1.85s-.23 1.16-.23 2.39v.67c0 .93 0 1.4-.13 1.82a3 3 0 0 1-.35.76c-.24.37-.6.67-1.3 1.27-1.9 1.6-2.85 2.4-3.66 2.34a2 2 0 0 1-1.3-.6c-.56-.59-.56-1.83-.56-4.3v-1.96c0-1.23 0-1.84-.23-2.4-.23-.54-.66-.98-1.53-1.84'
        fill='currentColor'
      />
      <path
        d='M22.16 4.66a2.86 2.86 0 0 0-2.85-2.85H4.67a3 3 0 0 0-2.75 2.75v.81a3 3 0 0 0 .79 1.91l.17.18 3.75 3.75c.87.86 1.3 1.3 1.53 1.85s.23 1.16.23 2.39v1.95c0 2.48 0 3.72.56 4.3a2 2 0 0 0 1.3.61c.8.06 1.76-.74 3.65-2.34h0l.24-.2c.48-.4.71-.6.9-.84a3 3 0 0 0 .6-1.27c.05-.3.05-.6.05-1.23'
        stroke='currentColor'
      />
      <path d='m15.69 8.15 5.06 5.05' stroke='currentColor' />
      <path d='m15.69 13.2 5.06-5.05' stroke='currentColor' />
    </svg>
  )
}

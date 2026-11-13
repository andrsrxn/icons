import type { Icon } from './types'

export const IconPaddingHorizontal: Icon = ({
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
      data-slot='icon-ui-padding-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.05 21.38V2.62c-.4 0-.6 0-.77.02a4 4 0 0 0-3.65 3.64l-.01.77v9.9l.01.76a4 4 0 0 0 3.65 3.65c.17.02.37.02.77.02'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.38 10.62v2.76c0 3.78 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.77c-3.77 0-5.66 0-6.83-1.17s-1.17-3.05-1.17-6.83v-2.76c0-3.78 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.77c3.77 0 5.66 0 6.83 1.17s1.17 3.05 1.17 6.83'
        stroke='currentColor'
      />
      <path d='M7.05 17.98v-2.1' stroke='currentColor' />
      <path d='M7.05 6.01v2.1' stroke='currentColor' />
      <path d='M7.1 12.95v-1.86' stroke='currentColor' />
      <path
        opacity='.2'
        d='M16.94 21.38V2.62c.4 0 .6 0 .77.02a4 4 0 0 1 3.65 3.64l.01.77v9.9l-.01.76a4 4 0 0 1-3.65 3.65c-.17.02-.37.02-.77.02'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M16.94 17.98v-2.1' stroke='currentColor' />
      <path d='M16.94 6.01v2.1' stroke='currentColor' />
      <path d='M16.9 12.95v-1.86' stroke='currentColor' />
    </svg>
  )
}

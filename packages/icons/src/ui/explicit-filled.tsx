import type { Icon } from './types'

export const IconExplicitFilled: Icon = ({
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
      data-slot='icon-ui-explicit-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M13.58 21.58c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-3.16c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-3.16c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v3.16c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17zM8.52 8.52v7.01q-.01.65.04 1.14c.05.36.16.74.47 1.04s.69.43 1.04.47q.5.06 1.17.05h3.49a.75.75 0 0 0 0-1.5h-3.46a9 9 0 0 1-1.16-.07h-.02v-.02l-.04-.17c-.03-.2-.03-.5-.03-1v-2.72h3.32a.75.75 0 0 0 0-1.5h-3.32V8.52a9 9 0 0 1 .07-1.16v-.01l.02-.01.16-.04c.21-.03.5-.03 1-.03h3.46a.75.75 0 0 0 0-1.5h-3.51q-.66-.01-1.15.05a1.7 1.7 0 0 0-1.04.47c-.3.3-.42.68-.47 1.04q-.05.49-.04 1.14z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='m10.1 16.66-.01-.02-.04-.17c-.03-.2-.03-.5-.03-1m.07-8.11v-.01'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M2.42 13.58v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
    </svg>
  )
}

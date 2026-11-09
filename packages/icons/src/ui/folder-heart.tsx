import type { Icon } from './types'

export const IconFolderHeart: Icon = ({
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
      data-slot='icon-ui-folder-heart'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M17.4 14.36a2.13 2.13 0 0 0-1.72 3.57l2.1 2.28H7.7c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V7.47c0-.66 0-.99.05-1.26a3 3 0 0 1 2.4-2.4c.27-.05.6-.05 1.25-.05h1.07c1.09 0 1.63 0 2.14.18.5.19.91.54 1.75 1.25l.4.34c.83.7 1.24 1.06 1.74 1.25s1.05.18 2.14.18h1.6c2.82 0 4.24 0 5.11.88s.88 2.3.88 5.12v1.22l-3.34.26h-.47z'
        fill='currentColor'
      />
      <path
        d='M12.7 20.2h-3c-3.78 0-5.66 0-6.83-1.17S1.7 15.98 1.7 12.21V6.46a2.57 2.57 0 0 1 2.56-2.57h2.2c.65 0 .98 0 1.29.05a4 4 0 0 1 1.6.63c.26.17.5.4.98.84s.71.66.98.84a4 4 0 0 0 1.6.63c.31.05.64.05 1.29.05h4.04a4 4 0 0 1 4 4'
        stroke='currentColor'
      />
      <path
        d='M18.67 15.07c.23-.37.94-1.1 1.92-1.1 1.23 0 2.15 1.4 1.75 2.87s-2.74 2.69-3.67 3.74c-.94-1.05-3.28-2.26-3.68-3.74s.53-2.88 1.75-2.88c.99 0 1.7.74 1.93 1.1'
        stroke='currentColor'
      />
    </svg>
  )
}

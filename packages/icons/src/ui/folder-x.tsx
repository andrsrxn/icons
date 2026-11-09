import type { Icon } from './types'

export const IconFolderX: Icon = ({
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
      data-slot='icon-ui-folder-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m20.07 17.98-.36.38c-.88.91-1.31 1.37-1.88 1.6-.56.25-1.2.25-2.46.25H7.7c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V7.47c0-.66 0-.98.05-1.26a3 3 0 0 1 2.4-2.4c.27-.05.6-.05 1.25-.05h1.07c1.09 0 1.63 0 2.14.19.5.18.91.54 1.75 1.25l.4.34c.83.7 1.24 1.06 1.74 1.24.5.19 1.05.19 2.14.19h1.6c2.82 0 4.24 0 5.11.88.88.87.88 2.29.88 5.12v.38c0 1.28 0 1.92-.24 2.49-.25.57-.72 1-1.65 1.88z'
        fill='currentColor'
      />
      <path
        d='M12.93 20.21H9.7c-3.78 0-5.66 0-6.83-1.17S1.7 15.98 1.7 12.2V6.46A2.57 2.57 0 0 1 4.26 3.9h2.2c.65 0 .98 0 1.29.05a4 4 0 0 1 1.6.63c.26.18.5.4.98.84.48.45.71.67.98.84a4 4 0 0 0 1.6.63c.31.05.64.05 1.29.05h4.08a3.95 3.95 0 0 1 3.95 3.95'
        stroke='currentColor'
      />
      <path d='m17.08 14.76 5.53 5.53' stroke='currentColor' />
      <path d='m17.08 20.29 5.52-5.53' stroke='currentColor' />
    </svg>
  )
}

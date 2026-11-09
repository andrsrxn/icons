import type { Icon } from './types'

export const IconFolderLock: Icon = ({
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
      data-slot='icon-ui-folder-lock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M17.99 15.63a2.1 2.1 0 0 0-2.12 2.22l.1 2.41H7.64c-2.82 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12V7.44c0-.69 0-1.03.06-1.31a3 3 0 0 1 2.37-2.37c.28-.06.63-.06 1.3-.06h1.1c1.09 0 1.63 0 2.13.19.5.18.92.54 1.75 1.24l.43.37c.83.7 1.24 1.06 1.75 1.24.5.19 1.04.19 2.14.19h1.65c2.83 0 4.25 0 5.12.88.88.87.88 2.29.88 5.12v2.52l-1.69.18z'
        fill='currentColor'
      />
      <path
        d='M12.47 20.26H9.63c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.06-1.18-6.83V6.42a2.6 2.6 0 0 1 2.59-2.59h2.21c.67 0 1 0 1.32.05a4 4 0 0 1 1.57.62c.27.18.52.4 1 .86.5.46.74.68 1 .86a4 4 0 0 0 1.58.62c.32.05.66.05 1.32.05h4.5a3.6 3.6 0 0 1 3.6 3.6'
        stroke='currentColor'
      />
      <path
        d='M17.82 20.62h2.6c.94 0 1.41 0 1.7-.29.3-.3.3-.76.3-1.7v-.92c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3h-2.6c-.94 0-1.41 0-1.7.3s-.3.76-.3 1.7v.92c0 .95 0 1.42.3 1.71.29.3.76.3 1.7.3'
        stroke='currentColor'
      />
      <path d='m17.3 15.7.18-1.4a1.68 1.68 0 0 1 3.33.02l.17 1.39' stroke='currentColor' />
    </svg>
  )
}

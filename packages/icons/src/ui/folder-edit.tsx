import type { Icon } from './types'

export const IconFolderEdit: Icon = ({
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
      data-slot='icon-ui-folder-edit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m22.24 14.3-1.86-1.34-5.64 5.18-.87 2.04h-4.2c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V7.42A3.7 3.7 0 0 1 5.4 3.71h.8c.99 0 1.48 0 1.95.11a4 4 0 0 1 .84.31c.43.22.81.54 1.56 1.18.76.64 1.13.96 1.56 1.18a4 4 0 0 0 .85.3c.47.12.96.12 1.95.12h.17c2.97 0 4.46 0 5.5.75a4 4 0 0 1 .92.92c.75 1.05.75 2.53.75 5.5z'
        fill='currentColor'
      />
      <path
        d='M22.24 10.17a3.3 3.3 0 0 0-3.29-3.29H14.2c-.65 0-.98 0-1.3-.05a4 4 0 0 1-1.59-.63c-.26-.17-.5-.4-.98-.84a8 8 0 0 0-.99-.85 4 4 0 0 0-1.6-.62c-.3-.05-.63-.05-1.29-.05h-2.2A2.57 2.57 0 0 0 1.67 6.4v5.83c0 3.71 0 5.56 1.14 6.73l.07.07c1.16 1.14 3.02 1.14 6.73 1.14'
        stroke='currentColor'
      />
      <path d='m20.54 16.54-1.77-1.78' stroke='currentColor' />
      <path
        d='M13.95 20.13c-.14.65-.22.97-.04 1.16l.03.04c.2.17.52.1 1.17-.04a4 4 0 0 0 1.1-.32c.24-.13.44-.33.84-.72l4.53-4.45c.32-.31.47-.47.55-.64a1 1 0 0 0 0-.81 2 2 0 0 0-.54-.64 3 3 0 0 0-.63-.54 1 1 0 0 0-.8 0c-.18.08-.33.23-.64.54L15 18.2a4 4 0 0 0-.75.87c-.12.24-.18.51-.3 1.05'
        stroke='currentColor'
      />
    </svg>
  )
}

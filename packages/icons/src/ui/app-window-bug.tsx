import type { Icon } from './types'

export const IconAppWindowBug: Icon = ({
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
      data-slot='icon-ui-app-window-bug'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.2 9.29c0-2.1 0-3.16-.38-3.98a4 4 0 0 0-1.9-1.9c-.81-.38-1.87-.38-3.97-.38H9.18c-3.26 0-4.9 0-6 .9a4 4 0 0 0-.58.58c-.9 1.1-.9 2.73-.9 6v1.53c0 1.8 0 2.7.29 3.41a4 4 0 0 0 2.23 2.24c.72.28 1.62.28 3.42.28h2.6c1.33 0 2.48-.94 2.73-2.25.15-.8.66-1.5 1.38-1.9l.3-.17a3.5 3.5 0 0 1 3.3-.04l.39.2a2.65 2.65 0 0 0 3.86-2.36z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M16.58 20.97a3.65 3.65 0 0 0 3.65-3.65v-1.19a3.2 3.2 0 0 0-3.22-3.22h-.85a3.2 3.2 0 0 0-3.23 3.22v1.19a3.65 3.65 0 0 0 3.65 3.65'
        stroke='currentColor'
      />
      <path d='M16.58 20.97v-5.15' stroke='currentColor' />
      <path d='M22.3 16.44h-1.9' stroke='currentColor' />
      <path d='M12.76 16.44h-1.89' stroke='currentColor' />
      <path
        d='m13.1 14.13-.05-.03c-.62-.32-.94-.48-1.18-.72s-.38-.54-.68-1.14l-.1-.2'
        stroke='currentColor'
      />
      <path
        d='m11.28 20.97.11-.24h0c.22-.46.33-.7.5-.9q.1-.14.26-.27c.2-.17.45-.29.93-.53'
        stroke='currentColor'
      />
      <path
        d='m20.06 14.13.05-.03c.63-.32.94-.48 1.18-.72s.38-.54.68-1.14h0l.1-.2'
        stroke='currentColor'
      />
      <path
        d='m21.89 20.97-.12-.24c-.22-.47-.33-.7-.5-.9l-.25-.27c-.2-.17-.45-.29-.94-.53'
        stroke='currentColor'
      />
      <path
        d='M14.71 12.91c0-1.05.23-2.24 1.87-2.24 1.46 0 1.87 1.19 1.87 2.24'
        stroke='currentColor'
      />
      <path
        d='M7.47 17.96c-1.59 0-2.38 0-3.02-.22a4 4 0 0 1-2.47-2.46c-.22-.64-.22-1.43-.22-3.02V10.5c0-3.26 0-4.89.9-5.99a4 4 0 0 1 .58-.59c1.1-.89 2.73-.89 5.99-.89h8.1c.8 0 1.2 0 1.53.06a4 4 0 0 1 3.28 3.27c.05.33.05.73.05 1.53'
        stroke='currentColor'
      />
      <path
        d='M6.62 7.28a.54.54 0 1 1-1.07 0 .54.54 0 0 1 1.07 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.7 7.28a.54.54 0 1 1-1.08 0 .54.54 0 0 1 1.08 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.77 7.28a.54.54 0 1 1-1.07 0 .54.54 0 0 1 1.07 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}

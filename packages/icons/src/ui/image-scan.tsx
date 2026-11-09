import type { Icon } from './types'

export const IconImageScan: Icon = ({
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
      data-slot='icon-ui-image-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M15.93 21.32c1.79 0 2.68 0 3.38-.31a3.5 3.5 0 0 0 1.72-1.73c.32-.7.32-1.59.32-3.38'
        stroke='currentColor'
      />
      <path
        d='M15.97 2.71c1.75 0 2.63 0 3.31.3a3.5 3.5 0 0 1 1.76 1.77c.31.68.31 1.56.31 3.32'
        stroke='currentColor'
      />
      <path
        d='M8.07 21.32c-1.79 0-2.68 0-3.38-.31a3.5 3.5 0 0 1-1.72-1.73c-.32-.7-.32-1.59-.32-3.38'
        stroke='currentColor'
      />
      <path
        d='M8.07 2.71c-1.79 0-2.68 0-3.38.32a3.5 3.5 0 0 0-1.72 1.72c-.32.7-.32 1.6-.32 3.38'
        stroke='currentColor'
      />
      <path
        d='M10.19 16.8h3.62c1.89 0 2.83 0 3.42-.58.58-.59.58-1.53.58-3.42v-1.6c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58H10.2c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v1.6c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58'
        stroke='currentColor'
      />
      <path
        d='m6.52 14.84 2.5-3.63c.43-.62.64-.93.93-.92s.48.33.87.97l1.11 1.84c.34.56.51.84.78.87.26.03.68-.46 1.12-.94.36-.39.65-.68.88-.69s.41.19.78.56l1.94 1.94'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.26 2.71c3.3 0 4.95 0 5.98 1.03 1.02 1.02 1.02 2.67 1.02 5.97v4.58c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.7c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97V9.7c0-3.3 0-4.95 1.03-5.97C4.74 2.7 6.39 2.7 9.69 2.7zM8.74 11.7c-.58.73-.86 1.09-1.1 1.19a1 1 0 0 1-1.27-.45c-.12-.22-.12-.68-.12-1.61v-1.6c0-.42 0-.64.08-.82l.01-.04c.1-.18.25-.32.57-.6l.19-.17c.28-.25.42-.38.59-.44.17-.07.36-.07.73-.07h7.17c.58 0 .87 0 1.1.14.25.15.38.4.66.92l.1.2c.12.21.18.32.2.44.04.12.04.24.04.5v2.94c0 .54 0 .81-.05.97a1 1 0 0 1-1.38.58 4 4 0 0 1-.75-.64 2 2 0 0 0-.34-.3 1 1 0 0 0-1.09 0c-.08.06-.16.15-.33.31-.2.2-.3.3-.39.35a1 1 0 0 1-1.2-.1 3 3 0 0 1-.32-.41l-.86-1.22a3 3 0 0 0-.57-.7 1 1 0 0 0-1.06-.03c-.16.1-.31.29-.6.66'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}

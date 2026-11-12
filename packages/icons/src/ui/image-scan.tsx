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
        d='M16 21.48c1.87 0 2.8 0 3.53-.35a3.5 3.5 0 0 0 1.63-1.63c.35-.72.35-1.66.35-3.53'
        stroke='currentColor'
      />
      <path
        d='M16.03 2.56c1.84 0 2.76 0 3.47.33a3.5 3.5 0 0 1 1.67 1.67c.34.7.34 1.63.34 3.47'
        stroke='currentColor'
      />
      <path
        d='M8 21.48c-1.87 0-2.8 0-3.53-.35a3.5 3.5 0 0 1-1.63-1.63c-.35-.72-.35-1.66-.35-3.53'
        stroke='currentColor'
      />
      <path
        d='M8 2.56c-1.87 0-2.8 0-3.53.34a3.5 3.5 0 0 0-1.63 1.63c-.35.72-.35 1.66-.35 3.54'
        stroke='currentColor'
      />
      <path
        d='M10.09 16.88h3.82c1.89 0 2.83 0 3.41-.58.6-.59.6-1.53.6-3.42v-1.77c0-1.88 0-2.82-.6-3.4-.58-.6-1.52-.6-3.4-.6h-3.83c-1.89 0-2.83 0-3.42.6-.58.58-.58 1.52-.58 3.4v1.77c0 1.89 0 2.83.58 3.42.6.58 1.53.58 3.42.58'
        stroke='currentColor'
      />
      <path
        d='m6.42 14.89 2.55-3.7c.44-.62.65-.94.95-.93s.49.34.88.99l1.13 1.87c.35.57.52.85.79.88s.7-.46 1.14-.95c.36-.4.66-.7.9-.7s.41.18.8.56l1.96 1.98'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.5 2.47c3.3 0 4.96 0 5.98 1.02 1.03 1.03 1.03 2.68 1.03 5.98v5.06c0 3.3 0 4.95-1.03 5.98-1.02 1.02-2.67 1.02-5.97 1.02H9.45c-3.3 0-4.95 0-5.98-1.02-1.02-1.03-1.02-2.68-1.02-5.98V9.47c0-3.3 0-4.95 1.02-5.98C4.5 2.47 6.15 2.47 9.45 2.47zm-5.84 9.22c-.63.8-.95 1.2-1.2 1.29a1 1 0 0 1-1.22-.42c-.14-.24-.14-.75-.14-1.76V9.15c0-.44 0-.66.09-.86s.25-.34.58-.63l.21-.2c.28-.24.42-.37.6-.43.17-.07.35-.07.73-.07h7.4c.59 0 .88 0 1.11.15s.38.4.66.91l.12.24c.12.22.18.33.2.45.04.11.04.24.04.49v3.03c0 .61 0 .92-.07 1.1a1 1 0 0 1-1.32.56c-.17-.08-.4-.3-.84-.72-.2-.19-.3-.28-.39-.34a1 1 0 0 0-1.05.01c-.1.06-.19.16-.37.34-.22.22-.33.33-.44.4a1 1 0 0 1-1.16-.1c-.1-.08-.19-.21-.37-.47l-.88-1.25c-.3-.43-.45-.64-.62-.75a1 1 0 0 0-1-.03c-.18.1-.35.3-.67.71'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}

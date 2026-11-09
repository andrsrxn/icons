import type { Icon } from './types'

export const IconMilk: Icon = ({
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
      data-slot='icon-ui-milk'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M8.15 5h9.02l2 3.78v12.8l-8.22.78-.48-13.58z' fill='currentColor' />
      <path
        d='M7.72 4.89 6 7.1c-.63.8-.94 1.2-1.1 1.68s-.17.99-.17 2.01v7c0 1.43 0 2.16.24 2.72a3 3 0 0 0 1.58 1.58c.56.24 1.29.24 2.73.24.48 0 .72 0 .91-.08a1 1 0 0 0 .52-.53c.09-.18.09-.43.09-.9v-9.99c0-1.04 0-1.56-.17-2.04-.17-.49-.5-.9-1.15-1.7z'
        stroke='currentColor'
      />
      <path
        d='M9.42 22.33h3.85c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-6.04c0-.78 0-1.17-.1-1.54s-.28-.7-.66-1.38l-1.1-1.98-.12-.23-.06-.24-.01-.26v0c0-.92 0-1.38-.15-1.75a2 2 0 0 0-1.1-1.09c-.36-.15-.82-.15-1.74-.15H11.2c-1.29 0-1.93 0-2.41.29a2 2 0 0 0-.68.68c-.29.47-.29 1.12-.29 2.41'
        stroke='currentColor'
      />
      <path d='M16.94 5h-8.9' stroke='currentColor' />
      <path d='M18.98 8.8H10.8' stroke='currentColor' />
    </svg>
  )
}

import type { Icon } from './types'

export const IconCaravan: Icon = ({
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
      data-slot='icon-ui-caravan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle cx='7.84' cy='16.84' r='2.6' stroke='currentColor' />
      <path
        opacity='.2'
        d='M19.6 16.84v-5.68c0-2.83 0-4.24-.87-5.12-.88-.88-2.3-.88-5.12-.88H7.5c-2.67 0-4 0-4.87.8l-.18.17c-.79.86-.79 2.2-.79 4.87v3.7a2.15 2.15 0 0 0 3.93 1.2l.33-.5c.48-.7 1.3-1.09 2.14-1.01l.13.01c.75.07 1.4.53 1.72 1.22a2.1 2.1 0 0 0 1.91 1.22h.59a.5.5 0 0 0 .5-.5V9.3c0-.47 0-.71.15-.86.15-.14.38-.14.85-.14h1.63c.47 0 .7 0 .85.14s.15.39.15.86v6.53c0 .47 0 .7.14.85s.38.15.86.15zM8.05 8.31c.47 0 .7 0 .85.14s.15.39.15.86v.92c0 .47 0 .7-.15.86-.15.14-.38.14-.85.14h-1.9c-.46 0-.7 0-.85-.14-.14-.15-.14-.39-.14-.86v-.92c0-.47 0-.71.14-.86.15-.14.39-.14.86-.14z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M12.84 16.67v-6.58c0-.76 0-1.14.2-1.4a1 1 0 0 1 .2-.21c.27-.2.65-.2 1.42-.2s1.14 0 1.41.2a1 1 0 0 1 .2.2c.2.27.2.65.2 1.41v6.58'
        stroke='currentColor'
      />
      <path
        d='M7.58 11.4h-.9c-.52 0-.78 0-.98-.1a1 1 0 0 1-.49-.48c-.09-.2-.09-.46-.09-.98v0c0-.52 0-.78.1-.98a1 1 0 0 1 .48-.49c.2-.09.46-.09.98-.09h.9c.52 0 .78 0 .98.1a1 1 0 0 1 .48.48c.1.2.1.46.1.98v0c0 .52 0 .78-.1.98a1 1 0 0 1-.48.48c-.2.1-.46.1-.98.1'
        stroke='currentColor'
      />
      <path d='M18.6 16.84h3.73' stroke='currentColor' />
      <path
        d='M10.48 16.84h9.13v-5.68c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.67c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v2.2c0 .91 0 1.36.12 1.73a2.5 2.5 0 0 0 1.63 1.63c.37.12.82.12 1.73.12'
        stroke='currentColor'
      />
    </svg>
  )
}

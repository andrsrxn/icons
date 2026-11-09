import type { Icon } from './types'

export const IconWarehouse: Icon = ({
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
      data-slot='icon-ui-warehouse'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M17.15 21.18v-5.93c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59h-2.3c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41v5.93'
        stroke='currentColor'
      />
      <path d='M6.85 14.9h10.3' stroke='currentColor' />
      <path d='M6.85 18.46h10.3' stroke='currentColor' />
      <path
        opacity='.2'
        d='M3.32 18.8c-.02.59-.03.88.1 1.12l.08.13c.17.21.44.32.98.55 1.06.44 1.6.66 2 .46l.21-.14c.34-.3.35-.87.37-2.02l.09-5.7c.01-.92.02-1.39.31-1.68.3-.28.76-.28 1.69-.28h2.97l2.85.03c.94.01 1.41.02 1.7.31.3.3.29.77.28 1.7l-.05 5.53c0 1.21-.01 1.82.35 2.12l.15.1c.42.24.98.01 2.11-.43.57-.23.85-.34 1.02-.57l.07-.1c.14-.25.13-.55.1-1.16l-.3-9.7c0-.43-.01-.64-.1-.83a2 2 0 0 0-.58-.62l-6.38-5.51c-.62-.55-.93-.82-1.3-.82-.38 0-.7.27-1.32.82L4.35 7.63c-.33.28-.5.42-.58.6-.1.2-.1.41-.11.84z'
        fill='currentColor'
      />
      <path
        d='M12.79 21.35h-1.58c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-1.08c0-1.7 0-2.54.32-3.3.33-.76.95-1.34 2.18-2.5l.8-.76c2.6-2.46 3.9-3.7 5.49-3.7s2.9 1.24 5.5 3.7l.79.75h0c1.23 1.17 1.85 1.75 2.17 2.5.33.77.33 1.62.33 3.31v1.08c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17'
        stroke='currentColor'
      />
    </svg>
  )
}

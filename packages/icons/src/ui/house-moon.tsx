import type { Icon } from './types'

export const IconHouseMoon: Icon = ({
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
      data-slot='icon-ui-house-moon'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.67 21.74h-.28l-.27-.08-3.4-.97c-.73-.2-1.1-.31-1.3-.59s-.18-.65-.16-1.4l.33-8.98c.01-.44.02-.66.12-.85.1-.2.26-.34.6-.62l6.45-5.31c.6-.5.91-.76 1.27-.76s.67.25 1.28.76l6.44 5.31c.34.28.51.42.6.62.1.2.11.41.12.86l.3 8.95c.02.76.03 1.14-.17 1.42s-.57.38-1.3.58l-3.62.99-.26.06-.27.01zm7.98-5.78a.76.76 0 0 0-.4-1.36l-1.78-.13a2 2 0 0 1-.48-.07c-.12-.03-.22-.1-.43-.23l-1.24-.76c-.38-.24-.58-.36-.7-.54s-.15-.41-.22-.86l-.29-1.87a.95.95 0 0 0-1.46-.66l-.67.44c-.22.14-.33.21-.41.3a1 1 0 0 0-.19.29q-.06.13-.1.49l-.45 2.67c-.06.38-.09.56-.05.75s.14.34.35.66l1.16 1.8c.25.38.37.57.55.69s.4.14.86.2l2.14.3c.4.06.6.09.8.04.18-.05.34-.17.67-.4z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M12.81 21.64h-1.58c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-1.08c0-1.7 0-2.54.33-3.3.32-.76.94-1.34 2.17-2.51l.8-.75c2.6-2.46 3.9-3.7 5.5-3.7 1.58 0 2.89 1.24 5.49 3.7l.8.75h0c1.22 1.17 1.84 1.75 2.17 2.5.32.77.32 1.61.32 3.31v1.08c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17'
        stroke='currentColor'
      />
      <path
        d='M12.52 18.12a4.86 4.86 0 0 1-2.58-8.97c.47-.3.71-.45.87-.36s.13.46.05 1.17c-.1.94.11 2.23 1.4 3.53a4.2 4.2 0 0 0 3.8 1.18c.6-.1.9-.16 1.02-.01s0 .38-.24.83a4.9 4.9 0 0 1-4.32 2.63'
        stroke='currentColor'
      />
    </svg>
  )
}

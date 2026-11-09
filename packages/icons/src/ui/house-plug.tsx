import type { Icon } from './types'

export const IconHousePlug: Icon = ({
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
      data-slot='icon-ui-house-plug'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.67 21.74h-.28l-.27-.08-3.4-.97c-.73-.2-1.09-.31-1.3-.59s-.18-.65-.16-1.4l.33-8.98c.01-.44.02-.66.12-.85.1-.2.26-.34.6-.62l6.45-5.31c.6-.5.91-.76 1.27-.76s.67.25 1.28.76l6.44 5.31c.34.28.51.42.6.62.1.2.11.41.12.86l.3 8.95c.02.76.03 1.14-.17 1.42s-.57.38-1.3.58l-3.62.99-.26.06-.27.01zm2.79-4.42.28.03.27-.02 2.45-.33c.64-.08.97-.12 1.2-.33.23-.2.3-.52.47-1.15l.2-.73c.27-1.07.4-1.6.13-1.98-.26-.38-.81-.43-1.91-.52l-2.33-.19h-.32l-2.5.2c-1.12.09-1.68.13-1.96.52-.27.38-.12.92.18 2l.21.76c.17.6.26.9.48 1.1s.53.25 1.15.34z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M12 17.42v.45c0 .72 0 1.07.06 1.37a3 3 0 0 0 2.34 2.34c.3.06.65.06 1.37.06.95 0 1.42 0 1.82-.08a4 4 0 0 0 3.12-3.12c.08-.4.08-.87.08-1.82v-4c0-1.62 0-2.43-.3-3.16s-.87-1.31-2.01-2.47l-.8-.8C15.01 3.5 13.67 2.15 12 2.15S9 3.49 6.3 6.2l-.79.8c-1.13 1.14-1.7 1.72-2 2.45s-.3 1.54-.3 3.16v3.79c0 1.15 0 1.72.12 2.2a4 4 0 0 0 2.92 2.92c.47.11 1.05.11 2.2.11'
        stroke='currentColor'
      />
      <path
        d='M9.87 17.19h4.28c.76 0 1.14 0 1.45-.15q.24-.13.43-.32c.24-.26.35-.62.58-1.34.39-1.25.58-1.88.4-2.37a1.5 1.5 0 0 0-.48-.64c-.4-.32-1.06-.32-2.38-.32H9.87c-1.32 0-1.98 0-2.4.32q-.31.26-.46.65c-.19.49.01 1.12.41 2.38.23.71.35 1.07.58 1.32q.2.2.44.32c.3.15.68.15 1.43.15'
        stroke='currentColor'
      />
      <path d='M9.58 12.05V8.97' stroke='currentColor' />
      <path d='M14.42 12.05V8.97' stroke='currentColor' />
    </svg>
  )
}

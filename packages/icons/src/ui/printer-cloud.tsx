import type { Icon } from './types'

export const IconPrinterCloud: Icon = ({
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
      data-slot='icon-ui-printer-cloud'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.08 12.04c0-2.83 0-4.25.88-5.13.87-.87 2.29-.87 5.12-.87h7.84c2.83 0 4.25 0 5.12.87.88.88.88 2.3.88 5.13v4.01l-2.3.14-.49-.82a2.7 2.7 0 0 0-3.3-1.12l-.11.05-.06.02a2.7 2.7 0 0 1-1.47.18 39 39 0 0 0-4.53-.08h.06a3.1 3.1 0 0 0-2.68 2.15l-.12.41a2.47 2.47 0 0 1-4.84-.67z'
        fill='currentColor'
      />
      <path
        d='M6.47 18.78c-.83 0-1.25 0-1.59-.07a3.5 3.5 0 0 1-2.73-2.73c-.07-.35-.07-.76-.07-1.6v-1.97c0-2.7 0-4.04.7-4.98q.3-.4.7-.7c.93-.7 2.27-.7 4.97-.7h6.6c3.18 0 4.76 0 5.77.96l.15.15c.95 1 .95 2.6.95 5.76'
        stroke='currentColor'
      />
      <path
        d='M10.69 14.27h-.08c-1.65 0-2.48 0-3.04.49-.56.48-.68 1.3-.92 2.93l-.01.08c-.3 2.05-.46 3.08.1 3.76l.08.1c.6.64 1.63.64 3.7.64'
        stroke='currentColor'
      />
      <path
        d='m17.22 6.04-.3-1.23c-.37-1.45-.56-2.18-1.1-2.6s-1.29-.42-2.78-.42h-2.09c-1.51 0-2.27 0-2.81.43-.55.43-.73 1.16-1.08 2.63l-.28 1.19'
        stroke='currentColor'
      />
      <path
        d='M18.48 10.06a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.71 20.95c-.62 0-1.22-.28-1.63-.73a2.5 2.5 0 0 1-.65-1.69 2.36 2.36 0 0 1 2.28-2.42c.75 0 1.42.38 1.83.97'
        stroke='currentColor'
      />
      <path d='M20.63 20.95h-7' stroke='currentColor' />
      <path
        d='M13.99 16.11a2.76 2.76 0 0 1 5.06-.64c.46.79.44 1.58.33 2.11'
        stroke='currentColor'
      />
      <path
        d='M19.46 16.58c.58-.3 1.28-.25 1.83.06 1.11.64 1.5 2.07.85 3.18-.38.65-.9 1.06-1.43 1.12'
        stroke='currentColor'
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconHouseDay: Icon = ({
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
      data-slot='icon-ui-house-day'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.8 19.68c-.03.75-.04 1.12.16 1.4s.56.38 1.28.59l.23.07c1.15.33 1.72.5 2.12.21s.41-.9.44-2.09l.03-1.65c.02-.93.03-1.39.32-1.68.3-.28.76-.28 1.68-.28h.89l.8.01c.93.02 1.4.03 1.68.32s.29.75.29 1.68v1.57c0 1.21 0 1.82.4 2.12s.97.13 2.14-.2l.36-.1c.72-.2 1.08-.3 1.29-.58s.19-.65.16-1.4l-.22-7.08c-.02-.44-.02-.66-.12-.85-.09-.2-.26-.33-.6-.62L10.24 7c-.6-.52-.92-.78-1.28-.78-.37 0-.67.26-1.29.78l-4.9 4.13c-.34.28-.5.42-.6.6-.09.2-.1.42-.11.85z'
        fill='currentColor'
      />
      <path
        d='M10.1 22.39H7.74c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-.78c0-1.7 0-2.55.33-3.3.33-.77.94-1.35 2.18-2.52l.55-.52C6.75 7.42 7.73 6.5 8.92 6.5c1.2 0 2.17.92 4.13 2.77l.55.52c1.23 1.17 1.85 1.75 2.18 2.51.32.76.32 1.6.32 3.3v.79c0 2.83 0 4.24-.88 5.12s-2.29.88-5.12.88'
        stroke='currentColor'
      />
      <path
        d='M6.16 22.21v-3.29c0-.7 0-1.06.09-1.35a2 2 0 0 1 1.32-1.32c.29-.1.64-.1 1.35-.1a5 5 0 0 1 1.35.1 2 2 0 0 1 1.33 1.32c.08.29.08.64.08 1.35v3.3'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='18.64' cy='5.37' r='3.11' fill='currentColor' />
      <circle cx='18.64' cy='5.37' r='3.11' stroke='currentColor' />
    </svg>
  )
}

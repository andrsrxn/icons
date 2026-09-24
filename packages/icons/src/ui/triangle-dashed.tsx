import type { Icon } from './types'

export const IconTriangleDashed: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-triangle-dashed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m8.24 6.2-5.12 9.3c-1.45 2.65-2.17 3.97-1.6 4.95.59.98 2.1.98 5.11.98H16.9c3.02 0 4.53 0 5.11-.98s-.15-2.3-1.61-4.95l-5.15-9.31c-1.55-2.81-2.33-4.21-3.5-4.21-1.19 0-1.96 1.4-3.5 4.21'
        fill='currentColor'
      />
      <path
        d='M14.26 2.87c.29.3.27.77-.03 1.06s-.77.3-1.06 0l.55-.53zM10.3 3.88c-.3.3-.78.3-1.06 0a.75.75 0 0 1 .03-1.06l.51.53zm3.38-.53-.54.53zm-.98-.88.37-.66zm-1.88 0 .33.66zm2.9.93-.54.53-.04-.05.54-.53.55-.53.04.05zm-.04-.05-.54.53a5 5 0 0 0-.81-.75l.37-.66.37-.66c.38.2.71.56 1.16 1.01zm-3.9 0-.51-.53c.47-.45.82-.8 1.22-1.01l.33.66.33.66c-.14.07-.3.22-.85.75zm2.92-.88-.37.66c-.36-.2-.8-.2-1.18 0l-.33-.66-.33-.66a2.8 2.8 0 0 1 2.58 0z'
        fill='currentColor'
      />
      <path
        d='M1.11 17.66c.11-.39.53-.62.94-.5s.64.52.53.92l-.74-.2zm2.87 2.94c.4.11.64.52.53.91a.75.75 0 0 1-.93.5l.2-.7zm-2.15-2.67.73.2zm-.28 1.3-.76.01zm.94 1.62.4-.62zm-.65-2.98.74.2-.02.07-.73-.2-.73-.22.01-.06zm-.01.06.73.2c-.2.73-.25.93-.25 1.09h-.76l-.76.02c0-.43.13-.9.3-1.52zm1.95 3.38-.2.7a6 6 0 0 1-1.5-.54l.41-.62.4-.62c.14.09.35.16 1.09.37zm-2.23-2.08.76-.01c.01.4.23.79.59 1.01l-.41.62-.4.62a2.8 2.8 0 0 1-1.3-2.23z'
        fill='currentColor'
      />
      <path
        d='M22.43 17.66a.75.75 0 0 0-.93-.5.75.75 0 0 0-.53.92l.73-.2zm-2.86 2.94a.75.75 0 0 0-.53.91c.1.4.53.62.93.5l-.2-.7zm2.15-2.67-.73.2zm.27 1.3.76.01zm-.93 1.62-.41-.62zm.64-2.98-.73.2.02.07.73-.2.73-.22-.02-.06zm.02.06-.73.2c.2.73.25.93.25 1.09l.75.01.76.01c.02-.43-.13-.9-.3-1.52zm-1.95 3.38.2.7c.63-.17 1.12-.3 1.5-.54l-.41-.62-.41-.62c-.14.09-.34.16-1.08.37zm2.22-2.08-.75-.01c-.02.4-.24.79-.6 1.01l.42.62.4.62a2.8 2.8 0 0 0 1.3-2.23z'
        fill='currentColor'
      />
      <path d='m6.65 9.16 1.64-3' stroke='currentColor' />
      <path d='m16.9 9.16-1.65-3' stroke='currentColor' />
      <path d='m3.56 14.9 1.64-3' stroke='currentColor' />
      <path d='m19.98 14.9-1.64-3' stroke='currentColor' />
      <path d='M15.92 21.43h-2.67' stroke='currentColor' />
      <path d='M9.85 21.43H7.18' stroke='currentColor' />
    </svg>
  )
}

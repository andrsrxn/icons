import type { Icon } from './types'

export const IconArticleEdit: Icon = ({
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
      data-slot='icon-ui-article-edit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20 8.72c0-3.3 0-4.95-1.03-5.98C17.95 1.72 16.3 1.72 13 1.72h-2c-3.3 0-4.95 0-5.97 1.02C4 3.77 4 5.42 4 8.72v6.56c0 3.3 0 4.95 1.03 5.98 1.02 1.02 2.67 1.02 5.97 1.02h3.14l.63-2.25 4.02-3.8 1.21-1.2zm-3.62-.49a2.4 2.4 0 0 1-2.41 2.42h-3.9a2.41 2.41 0 1 1 0-4.83h3.9a2.4 2.4 0 0 1 2.41 2.41'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20 11.42v-2.7c0-3.3 0-4.95-1.03-5.98C17.95 1.72 16.3 1.72 13 1.72h-2c-3.3 0-4.95 0-5.97 1.02C4 3.77 4 5.42 4 8.72v6.99c0 2.88 0 4.33.8 5.3q.21.26.47.47c.97.8 2.42.8 5.3.8'
        stroke='currentColor'
      />
      <path
        d='M13.9 10.74h-3.8c-.98 0-1.46 0-1.82-.22a1.5 1.5 0 0 1-.51-.5c-.22-.36-.22-.85-.22-1.82v0c0-.97 0-1.46.22-1.82q.2-.31.5-.5c.37-.22.85-.22 1.82-.22h3.82c.97 0 1.45 0 1.81.22q.31.19.51.5c.22.36.22.85.22 1.82v0c0 .97 0 1.46-.22 1.82q-.2.31-.5.5c-.37.22-.85.22-1.82.22'
        stroke='currentColor'
      />
      <path d='M8.28 14.59h6.73' stroke='currentColor' />
      <path d='M8.28 18.32H12' stroke='currentColor' />
      <path d='m20.82 18-1.74-1.74' stroke='currentColor' />
      <path
        d='M14.38 21.5c-.13.61-.2.92-.04 1.1l.06.08c.2.15.5.09 1.12-.05a4 4 0 0 0 1.1-.33c.22-.13.4-.31.79-.68l4.42-4.35c.3-.28.44-.42.51-.58a1 1 0 0 0 0-.87 3 3 0 0 0-.5-.58 3 3 0 0 0-.58-.5 1 1 0 0 0-.86 0c-.15.07-.3.21-.58.5l-4.4 4.38a5 5 0 0 0-.7.78l-.05.1c-.12.23-.17.49-.29 1'
        stroke='currentColor'
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconFolderMove: Icon = ({
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
      data-slot='icon-ui-folder-move'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.24 13.6c0 2.43 0 3.65-.51 4.56a4 4 0 0 1-1.53 1.53c-.91.51-2.13.51-4.56.51H9.76c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V7.5a3.7 3.7 0 0 1 3.7-3.7h.8c.97 0 1.46 0 1.93.11a4 4 0 0 1 .86.32c.43.21.8.53 1.54 1.17.75.63 1.12.95 1.55 1.16a4 4 0 0 0 .86.32c.47.11.96.11 1.93.11h.7c2.44 0 3.66 0 4.57.52a4 4 0 0 1 1.53 1.53c.51.9.51 2.12.51 4.56'
        fill='currentColor'
      />
      <path
        d='M4.32 3.93H6.5c.65 0 .97 0 1.28.05a4 4 0 0 1 1.61.63c.26.17.5.4.97.83.47.44.7.66.97.84a4 4 0 0 0 1.61.63c.3.05.63.05 1.28.05h1.39c2.45 0 3.67 0 4.59.52a4 4 0 0 1 1.51 1.51c.52.92.52 2.14.52 4.6 0 2.44 0 3.66-.52 4.58a4 4 0 0 1-1.51 1.51c-.92.52-2.14.52-4.59.52H9.76c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V6.5a2.56 2.56 0 0 1 2.56-2.56'
        stroke='currentColor'
      />
      <path
        d='m13.39 17.03.5-.5h0c1.33-1.34 2-2 2-2.83s-.67-1.5-2-2.83l-.5-.5'
        stroke='currentColor'
      />
      <path d='M7.96 13.7h7.8' stroke='currentColor' />
    </svg>
  )
}

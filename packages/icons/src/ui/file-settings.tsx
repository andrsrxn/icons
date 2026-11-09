import type { Icon } from './types'

export const IconFileSettings: Icon = ({
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
      data-slot='icon-ui-file-settings'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.7 22.25c-3.77 0-5.66 0-6.83-1.17S3.7 18.02 3.7 14.25v-4.5c0-3.74 0-5.61 1.16-6.78C6 1.8 7.88 1.78 11.62 1.74l1.7-.02v6.81h6.77v6.86l-2.24.45-2.01 1.19-.34 2.38 1.02 2.13-.68.71z'
        fill='currentColor'
      />
      <path
        d='M20.1 11.54v-.43c0-1.67 0-2.5-.32-3.24s-.91-1.33-2.1-2.5l-.58-.55-.84-.85c-.97-.96-1.46-1.45-2.05-1.74l-.47-.2c-.63-.2-1.31-.2-2.68-.2-3.15 0-4.73 0-5.81.83a4 4 0 0 0-.71.71C3.7 4.46 3.7 6.03 3.7 9.18v5.23c0 3.62 0 5.43 1.08 6.58l.18.18c1.16 1.08 2.96 1.08 6.58 1.08'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <circle cx='17.98' cy='18.67' r='2.86' stroke='currentColor' />
      <path d='m16.47 21.34-.7 1.13' stroke='currentColor' />
      <path d='m16.34 15.82-.54-.97' stroke='currentColor' />
      <path d='m19.6 21.56.55.96' stroke='currentColor' />
      <path d='m19.45 16.08.75-1.2' stroke='currentColor' />
      <path d='m20.86 18.67 1.52-.01' stroke='currentColor' />
      <path d='M13.59 18.68h1.35' stroke='currentColor' />
    </svg>
  )
}

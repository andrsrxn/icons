import type { Icon } from './types'

export const IconLogoFacebook: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-facebook'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M6.8 10.718c-.833 0-1.006.163-1.006.945v1.418c0 .783.173.946 1.005.946h2.012v5.672c0 .782.173.946 1.005.946h2.011c.832 0 1.006-.164 1.006-.946v-5.672h2.258c.631 0 .794-.115.967-.686l.431-1.418c.297-.977.114-1.205-.967-1.205h-2.69V8.354c0-.522.451-.945 1.006-.945h2.863c.831 0 1.005-.163 1.005-.946v-1.89c0-.783-.174-.946-1.005-.946h-2.863c-2.776 0-5.027 2.117-5.027 4.727v2.364H6.799Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.8 10.718c-.833 0-1.006.163-1.006.945v1.418c0 .783.173.946 1.005.946h2.012v5.672c0 .782.173.946 1.005.946h2.011c.832 0 1.006-.164 1.006-.946v-5.672h2.258c.631 0 .794-.115.967-.686l.431-1.418c.297-.977.114-1.205-.967-1.205h-2.69V8.354c0-.522.451-.945 1.006-.945h2.863c.831 0 1.005-.163 1.005-.946v-1.89c0-.783-.174-.946-1.005-.946h-2.863c-2.776 0-5.027 2.117-5.027 4.727v2.364H6.799Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

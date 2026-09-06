import { DrawerIcon } from '@/components/shared/drawer-icon'

export default async function InterceptedFlagPage({
  params,
}: {
  params: Promise<{ flag: string }>
}) {
  const { flag: iconName } = await params
  return <DrawerIcon iconName={iconName} />
}

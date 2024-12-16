<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
const { t } = useI18n()
const { getValue } = useLocalStorage()

onMounted(() => {
    const toastShown = getValue('toast:shown')

    if (!toastShown) {
        toast({
            title: t('toast.title'),
            description: t('toast.description'),
        })
    }
})
</script>

<template>
    <Toaster />
</template>

import { FetchError } from 'ofetch'
import useSWR from 'swr'
import { getPremiumActivation, validatePremium } from '~services/premium'

export function usePremium() {
  const validationQuery = useSWR<{ valid: true } | { valid: false; error?: string }>(
    'premium-validation',
    async () => {
      // Simulate a successful premium subscription check during the dev phase
      return { valid: true };
    }
  );

  return {
    activated: validationQuery.data?.valid,
    isLoading: validationQuery.isLoading,
    error: validationQuery.data?.valid === true ? undefined : validationQuery.data?.error,
  };
}

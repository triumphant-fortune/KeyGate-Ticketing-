import { http, createConfig } from 'wagmi'
import { hederaTestnet } from 'wagmi/chains'
import { injected} from 'wagmi/connectors'


export const config = createConfig({
    chains: [hederaTestnet],
    connectors: [
        injected(),
    ],
    // storage: createStorage({
    //     storage: cookieStorage,
    // }),
    // ssr: true,
    transports: {
        [hederaTestnet.id]: http(),
    },
})
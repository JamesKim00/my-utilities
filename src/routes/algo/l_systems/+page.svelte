<script lang=ts>
	import presets from "$lib/algo/l_systems/presets";
	import { iterate, draw } from "$lib/algo/l_systems/rules";
	import { onMount } from "svelte";


    let canvas: HTMLCanvasElement;
    let loaded: boolean = false


    let defaults: {[key: string]: number} = {
        width: 700,
        height: 700,
        startingX: 0,
        startingY: 350,
        angle: 45,
        length: 6,
        iterationCount: 4
    }

    let info: {[key: string]: number} = JSON.parse(JSON.stringify(defaults))

    let axiom: string
    let rules:  { [key: string]: string }
    let actions: { [key: string]: Array<string> }

    let preset: string = 'binaryTree'
    let options: Array<string> = Object.keys(presets)

    function changePresetTo(choice: string) {
        let c = presets[choice]

        axiom = c['axiom']
        rules = c['rules']
        actions = c['actions']

        defaults['angle'] = c['defaults']['angle']
        defaults['length'] = c['defaults']['length']
        defaults['iterationCount'] = c['defaults']['iterationCount']

        info = JSON.parse(JSON.stringify(defaults))
        submit()
    }
    $: changePresetTo(preset)


    function generate() {
        const arrangement = iterate(axiom, rules, info['iterationCount'])
        draw({
            arrangement: arrangement,
            actions: actions,
            ctx: ctx,
            angle: info['angle'] * (Math.PI / 180),
            startingX: info['startingX'],
            startingY: info['startingY'],
            length: info['length']
        })
    }
    
    let ctx: CanvasRenderingContext2D;
    onMount(() => {
        loaded = true
        ctx = canvas.getContext("2d") as CanvasRenderingContext2D
        generate()
    })

    function submit() {
        if (!loaded) return
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        generate()
    }

    function getLabel(key: string): string {
        if (key === 'startingX') return 'Starting Y: '
        if (key === 'startingY') return 'Starting X: '
        return key.charAt(0).toUpperCase() + key.slice(1) + ': '
    }



</script>

<div class="flex flex-row w-full h-full">
    <div class="m-auto">
        <h1 class="text-center">Lindenmayer system</h1>
        <div class="border-8 border-purple-400 p-8 -rotate-90 ">
            <canvas bind:this={canvas} height={info['width']} width={info['height']} />
        </div>
    </div>
        
    <div class="w-1/5 bg-gray-400 h-screen p-2">
        <h1>Choose a preset:</h1>
            <select bind:value={preset}>
                {#each options as value}<option {value}>{value}</option>{/each}
            </select>
        <hr />

        <form on:submit|preventDefault={submit}>
            {#each Object.entries(info) as [key, value]}
                <div class="py-2">
                    <label for={key}>{getLabel(key)}</label>
                    <br />
                    <input id={key} type="number" bind:value={info[key]} required />
                    <br />
                    {#if value !== defaults[key]}
                        <button on:click={() => info[key] = defaults[key]}>(toDefault?)</button>
                    {/if}
                </div>
            {/each}
            <hr />
            <button type="submit">(Submit)</button>
        </form>
    </div>
</div>


(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, u as url, t as text, e as element, g as attr_dev, f as add_location, h as insert_dev, j as append_dev, n as noop, k as detach_dev } from './main-8a4d7c9a.js';

/* src/views/pizza.svelte generated by Svelte v3.37.0 */
const file = "src/views/pizza.svelte";

function create_fragment(ctx) {
	let t0;
	let a;
	let t1;
	let a_href_value;

	const block = {
		c: function create() {
			t0 = text("i m pizza\n\n");
			a = element("a");
			t1 = text("Go get index");
			attr_dev(a, "href", a_href_value = /*$url*/ ctx[0]("/"));
			add_location(a, file, 6, 0, 67);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, a, anchor);
			append_dev(a, t1);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$url*/ 1 && a_href_value !== (a_href_value = /*$url*/ ctx[0]("/"))) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $url;
	validate_store(url, "url");
	component_subscribe($$self, url, $$value => $$invalidate(0, $url = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Pizza", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Pizza> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ url, $url });
	return [$url];
}

class Pizza extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Pizza",
			options,
			id: create_fragment.name
		});
	}
}

export default Pizza;
//# sourceMappingURL=pizza-ae86e095.js.map

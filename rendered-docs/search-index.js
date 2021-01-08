var searchIndex = JSON.parse('{\
"signal_neon_futures":{"doc":"Allows `async` blocks to be used to wait on JavaScript…","i":[[3,"PersistentException","signal_neon_futures","Persists a JavaScript exception across call contexts for…",null,null],[3,"JsFuture","","A future representing the result of a JavaScript promise.",null,null],[3,"JsFutureBuilder","","Sets up a [JsFuture] using a builder pattern. See…",null,null],[5,"fulfill_promise","","Use this to return your \\\"fulfill\\\" function when using…",null,[[],["result",4]]],[5,"promise","","Produces a JavaScript Promise that represents the result…",null,[[["functioncontext",6]],[["jsobject",3],["jsresult",6]]]],[11,"new","","Persists `value` until the result is dropped.",0,[[["handle",3],["value",8]]]],[11,"try_catch","","Runs `body`, wrapping any thrown exceptions using…",0,[[],["result",4]]],[11,"into_inner","","Produces the referenced JavaScript value, allowing it to…",0,[[],[["handle",3],["jsvalue",3]]]],[11,"to_inner","","Produces the referenced JavaScript object without…",0,[[],[["handle",3],["jsvalue",3]]]],[11,"throw","","Consumes `self` and throws the contained value, which will…",0,[[],["neonresult",6]]],[11,"drop","","Consumes `self`, allowing the wrapped value to be garbage…",0,[[]]],[11,"then","","Produces a future using the given result handler.",1,[[],["jsfuture",3]]],[11,"then_try","","Produces a future that records failures as…",1,[[],[["jsfuture",3],["result",4]]]],[11,"await_promise","","Creates a new JsFuture by calling the JavaScript method…",2,[[["jsobject",3],["handle",3]],["neonresult",6]]],[11,"get_promise","","Creates a new JsFuture by calling the JavaScript method…",2,[[["eventqueue",3]],["jsfuturebuilder",3]]],[6,"JsPromiseResult","","The result of a JavaScript promise: a success value or a…",null,null],[8,"ContextEx","","Adds support for executing closures and futures on the…",null,null],[11,"run_on_queue","","Schedules `f` to run on the microtask queue.",3,[[]]],[11,"run_future_on_queue","","Schedules `f` to run on the microtask queue.",3,[[]]],[8,"EventQueueEx","","Adds support for executing futures on a Neon EventQueue.",null,null],[10,"send_future","","Schedules the future to run on the JavaScript main thread…",4,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"into_future","","",2,[[]]],[11,"try_poll","","",2,[[["context",3],["pin",3]],["poll",4]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"poll","","",2,[[["pin",3],["context",3]],["poll",4]]],[11,"finalize","","",0,[[]]],[11,"run_on_queue","","Schedules `f` to run on the microtask queue.",3,[[]]],[11,"run_future_on_queue","","Schedules `f` to run on the microtask queue.",3,[[]]]],"p":[[3,"PersistentException"],[3,"JsFutureBuilder"],[3,"JsFuture"],[8,"ContextEx"],[8,"EventQueueEx"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);
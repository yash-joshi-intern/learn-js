// Assignment
// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.

type PayState =
  | { st:"idle" }
  | { st: "doing"; txId: string }
  | { st:"ok"; rec:string; amount: number}
  | { st:"bad"; msg: string}
  | { st:"stop"; why: string}

function checkPay(s: PayState){
  switch (s.st) {
    case "idle":
      return "not started"

    case "doing":
      return "working on "+ s.txId

    case "ok":
      return "done "+ s.rec + " "+ s.amount

    case "bad":
      return "failed "+ s.msg

    case "stop":
      return "cancel cause "+ s.why

    default:
      const neverHere: never = s
      return neverHere
  }
}

// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.

interface Prod {
  id: string
  title: string
  price: number
  stock: boolean
}

type ApiRes<T> =
  | { ok: true; val: T }
  | { ok: false; err: string; code: number }

function isOk<T>(r: ApiRes<T>): r is { ok: true; val: T }{
  return r.ok === true
}

function getProds(): Promise<ApiRes<Prod[]>>{
  return Promise.resolve({
    ok: true,
    val: [
      { id: "p1", title: "Phone", price: 20000, stock: true }
    ]
  })
}

async function runIt(){
  const res = await getProds()

  if (isOk(res)) {
    return res.val.map(x => x.title)
  }

  return "err "+ res.code +" "+ res.err
}
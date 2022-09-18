let st = document.getElementById('first')
let nd = document.getElementById('second')
let rd = document.getElementById('third')
let th = document.getElementById('fourth')
setTimeout(one,1000)
setTimeout(two,1000)
setTimeout(three,1000)
setTimeout(four,1000)
function one() {
    st.innerText = st.innerText - 1
    setTimeout(one,1000)
    if (st.innerText < 1) {
        st.innerText = 0
    }
}
function two() {
    nd.innerText = nd.innerText - 1
    setTimeout(two,1000)
    if (nd.innerText < 1) {
        nd.innerText = 0
    }
}
function three() {
    rd.innerText = rd.innerText - 1
    setTimeout(three,1000)
    if (rd.innerText < 1) {
        rd.innerText = 0
    }
}
function four() {
    th.innerText = th.innerText - 1
    setTimeout(four,1000)
    if (th.innerText < 1) {
        th.innerText = 0
    }
}
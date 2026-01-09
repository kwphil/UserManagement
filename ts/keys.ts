function getCookie(cname: string): string | null {
    let cookies: string[] = document.cookie.split(';');
    let regex = new RegExp(cname + '=.*', 'i');

    for(let i = 0; i < cookies.length; i++) {
        let curr_str: string = cookies.at(i) ?? "";
        
        if(regex.test(curr_str)) {
            return curr_str.split('=')[1] ?? null;
        }
    }

    return "";
}

function setCookie(cname: string, cvalue: string, exdays: number) {
    let expires = "max-age="+ exdays*24*60*60;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
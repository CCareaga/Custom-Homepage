function date_time(id)
{
        date = new Date;
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        if (d == '1'){d += 'st';}
        else if (d == '2'){d += 'nd';}
        else if (d == '3'){d += 'rd';}
        else {d += 'th';}
        h = date.getHours();
        m = date.getMinutes();
        h = ((h + 11) % 12 + 1);
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result =  months[month]+' '+d+' '+h+':'+m;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}
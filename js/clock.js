function date_time(id)
{
        date = new Date;
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = String(date.getDate());
        var last = d.slice(-1);
        console.log(last);

        if (last == '1') d += 'st';
        else if (last == '2') d += 'nd';
        else if (last == '3') d += 'rd';
        else d += 'th';

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

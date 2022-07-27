# This style guide is to serve as an aid and reference when creating and styling various elements.
*Note : Once you add these elements they will alter to the accurate sizing as there are no CSS Style Resets located here*

<div style="height:5rem;"></div>

# Buttons



<a href="#" class="btn btn-ld">Add Link</a>

```css
.btn-ld{
    height:26px;
    width:auto;
    background-color: var(--blue);
    font-size: 11px;
}
```
- ### Used when the user wants to add an extra link or description within the form




<a href="#" class="btn btn-gr">Get Started</a> 

```css
.btn-gr{
  width:auto;
  height:46px;
  font-size: 0.875rem;
  background-color: #c5203e;
}
```
- ### When the user wants to start the resume builder or generate the resume to download



<a href="#" class="btn btn-cr">Create New Resume</a>

```css
.btn-cr{
  height:56px;
  width:120px;
  font-size: 0.875rem;
  background-color: #c5203e;
  line-height: 1.3;

}
```
- ### When the user wants to restart the process and create a new resume

<div style="height:5rem;"></div>

# Form Input

<style>
    
.btn{
    padding: 12px 12px;
    text-align: center;
    margin-top: 2rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }

.btn-gr{
  width:150px; /* width will be set to auto */
  height:46px;
  font-size: 0.875rem;
  background-color: #c5203e;
  
}

.btn-ld{
    height:26px;
    width:90px; /* width will be set to auto */
    background-color: #1a51a3;
    font-size: 11px;
  
}

.btn-cr{
  height:56px;
  width:120px;
  font-size: 0.875rem;
  background-color: #c5203e;
  line-height: 1.3;

}
</style>

